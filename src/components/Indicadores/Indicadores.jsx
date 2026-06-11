import { useEffect, useRef, useState } from "react";
import {
    fetchIndicadores,
    getErrorIndicadores,
    INITIAL_INDICADORES,
} from "../../infrastructure/api/indicators.js";
import moneyImage from "../../assets/images/money.jpg";

function getStatusClass(status) {
    if (status === "positive") return "up is-positive";
    if (status === "negative") return "down is-negative";
    return "neutral";
}

function IndicadorCard({ label, indicador }) {
    return (
        <div className="indicador-card">
            <span className="indicador-label">{label}</span>
            <span className="indicador-value">{indicador.value}</span>
            <span
                className={`indicador-change ${getStatusClass(indicador.status)}`}
            >
                {indicador.change}
            </span>
            {indicador.loading && (
                <div
                    className="indicador-spinner"
                    role="status"
                    aria-live="polite"
                    aria-label={`Carregando indicador ${label}`}
                >
                    <img
                        src={moneyImage}
                        alt="Carregando"
                        className="indicador-spinner-image"
                    />
                </div>
            )}
        </div>
    );
}

function setupIndicadoresCarousel(grid, scroller) {
    if (!grid || grid.dataset.carouselReady === "true") return () => {};

    const mediaQuery = window.matchMedia("(max-width: 600px)");
    let frameId = null;
    let paused = false;
    let active = false;
    let offset = 0;

    const getOriginalCards = () =>
        Array.from(grid.children).filter(
            (item) => item.dataset.carouselClone !== "true",
        );

    const getOriginalWidth = () => {
        const originals = getOriginalCards();
        if (!originals.length) return 0;

        const first = originals[0];
        const last = originals[originals.length - 1];
        return last.offsetLeft + last.offsetWidth - first.offsetLeft;
    };

    const removeIdsFromClone = (element) => {
        element.removeAttribute("id");
        element
            .querySelectorAll("[id]")
            .forEach((child) => child.removeAttribute("id"));
    };

    const removeClones = () => {
        grid
            .querySelectorAll('[data-carousel-clone="true"]')
            .forEach((item) => item.remove());
    };

    const addClones = () => {
        if (grid.querySelector('[data-carousel-clone="true"]')) return;

        getOriginalCards().forEach((item) => {
            const clone = item.cloneNode(true);
            clone.dataset.carouselClone = "true";
            clone.setAttribute("aria-hidden", "true");
            removeIdsFromClone(clone);
            grid.appendChild(clone);
        });
    };

    const stop = () => {
        active = false;
        if (frameId) cancelAnimationFrame(frameId);
        frameId = null;
        removeClones();
        offset = 0;
        grid.style.transform = "";
        grid.classList.remove("is-carousel-running", "is-carousel-paused");
    };

    const tick = () => {
        if (!active) return;

        if (!paused) {
            const originalWidth = getOriginalWidth();
            offset += 0.45;

            if (originalWidth && offset >= originalWidth) {
                offset = 0;
            }

            grid.style.transform = `translateX(-${offset}px)`;
        }

        frameId = requestAnimationFrame(tick);
    };

    const start = () => {
        if (!mediaQuery.matches) {
            stop();
            return;
        }

        removeClones();
        addClones();
        active = true;
        paused = false;
        offset = 0;
        grid.style.transform = "translateX(0)";
        grid.classList.add("is-carousel-running");
        grid.classList.remove("is-carousel-paused");

        if (!frameId) frameId = requestAnimationFrame(tick);
    };

    const togglePause = () => {
        if (!mediaQuery.matches) return;
        paused = !paused;
        grid.classList.toggle("is-carousel-paused", paused);
    };

    scroller.addEventListener("click", togglePause);

    const handleMediaChange = () => {
        if (mediaQuery.matches) start();
        else stop();
    };

    mediaQuery.addEventListener("change", handleMediaChange);

    grid.dataset.carouselReady = "true";
    start();

    return () => {
        stop();
        scroller.removeEventListener("click", togglePause);
        mediaQuery.removeEventListener("change", handleMediaChange);
        grid.dataset.carouselReady = "false";
    };
}

const INDICADORES_CONFIG = [
    { key: "poupanca", label: "POUPANÇA" },
    { key: "cdi", label: "CDI" },
    { key: "ipca", label: "IPCA" },
    { key: "usdbrl", label: "USD/BRL" },
    { key: "selic", label: "SELIC" },
];

export const Indicadores = () => {
    const [data, setData] = useState(INITIAL_INDICADORES);
    const gridRef = useRef(null);
    const wrapRef = useRef(null);

    const isLoading = Object.values(data).some((item) => item.loading);

    useEffect(() => {
        let isMounted = true;

        const loadData = async () => {
            try {
                const indicadores = await fetchIndicadores();
                if (isMounted) {
                    setData(indicadores);
                }
            } catch (error) {
                console.error("Erro ao carregar indicadores:", error);
                if (isMounted) {
                    setData(getErrorIndicadores());
                }
            }
        };

        loadData();

        return () => {
            isMounted = false;
        };
    }, []);

    useEffect(() => {
        if (isLoading) return;

        const grid = gridRef.current;
        const scroller = wrapRef.current;
        if (!grid || !scroller) return;

        return setupIndicadoresCarousel(grid, scroller);
    }, [isLoading]);

    return (
        <div className="indicadores-wrap" ref={wrapRef}>
            <div
                className="indicadores-grid"
                id="indicadores-grid"
                ref={gridRef}
            >
                {INDICADORES_CONFIG.map(({ key, label }) => (
                    <IndicadorCard
                        key={key}
                        label={label}
                        indicador={data[key]}
                    />
                ))}
            </div>
        </div>
    );
};
