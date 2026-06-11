import { CDI, IPCA, SELIC, USDBRL, POUPANCA } from "./client.js";

export function formatDecimal(value, fractionDigits = 2) {
    const number = Number(String(value).replace(",", "."));
    if (Number.isNaN(number)) return "--";
    return number.toLocaleString("pt-BR", {
        minimumFractionDigits: fractionDigits,
        maximumFractionDigits: fractionDigits,
    });
}

export function formatMoney(value) {
    const number = Number(String(value).replace(",", "."));
    if (Number.isNaN(number)) return "--";
    return number.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    });
}

async function fetchJson(url) {
    const response = await fetch(url, { cache: "no-store" });
    if (!response.ok) {
        throw new Error(`Falha ao carregar indicador: ${response.status}`);
    }
    return response.json();
}

const UNAVAILABLE = {
    value: "--",
    change: "Indisponível",
    loading: false,
    status: "neutral",
};

const LOADING = {
    value: "--",
    change: "Carregando...",
    loading: true,
    status: "neutral",
};

export const INITIAL_INDICADORES = {
    poupanca: { ...LOADING },
    cdi: { ...LOADING },
    ipca: { ...LOADING },
    usdbrl: { ...LOADING },
    selic: { ...LOADING },
};

export async function fetchIndicadores() {
    const [poupancaRes, cdiRes, ipcaRes, selicRes, usdRes] =
        await Promise.all([
            fetchJson(POUPANCA),
            fetchJson(CDI),
            fetchJson(IPCA),
            fetchJson(SELIC),
            fetchJson(USDBRL),
        ]);

    const poupancaItem = Array.isArray(poupancaRes) ? poupancaRes[0] : null;
    const cdiItem = Array.isArray(cdiRes) ? cdiRes[0] : null;
    const ipcaItem = Array.isArray(ipcaRes) ? ipcaRes[0] : null;
    const selicItem = Array.isArray(selicRes) ? selicRes[0] : null;
    const usdItem = usdRes?.USDBRL ?? null;

    const result = {
        poupanca: { ...UNAVAILABLE },
        cdi: { ...UNAVAILABLE },
        ipca: { ...UNAVAILABLE },
        usdbrl: { ...UNAVAILABLE },
        selic: { ...UNAVAILABLE },
    };

    if (poupancaItem) {
        result.poupanca = {
            value: `${formatDecimal(poupancaItem.valor)}%`,
            change: `Último dado: ${poupancaItem.data}`,
            loading: false,
            status: "neutral",
        };
    }

    if (cdiItem) {
        result.cdi = {
            value: `${formatDecimal(cdiItem.valor)}%`,
            change: "taxa média",
            loading: false,
            status: "neutral",
        };
    }

    if (ipcaItem) {
        result.ipca = {
            value: `${formatDecimal(ipcaItem.valor)}%`,
            change: "acumulado",
            loading: false,
            status: "neutral",
        };
    }

    if (usdItem) {
        const usdChange = Number(
            String(usdItem.pctChange).replace(",", "."),
        );
        const usdDirection = Number.isNaN(usdChange)
            ? "neutral"
            : usdChange > 0
              ? "positive"
              : usdChange < 0
                ? "negative"
                : "neutral";

        result.usdbrl = {
            value: formatMoney(usdItem.bid),
            change: `${formatDecimal(usdItem.pctChange)}%`,
            loading: false,
            status: usdDirection,
        };
    }

    if (selicItem) {
        result.selic = {
            value: `${formatDecimal(selicItem.valor)}%`,
            change: "ao ano",
            loading: false,
            status: "neutral",
        };
    }

    return result;
}

export function getErrorIndicadores() {
    return {
        poupanca: { ...UNAVAILABLE },
        cdi: { ...UNAVAILABLE },
        ipca: { ...UNAVAILABLE },
        usdbrl: { ...UNAVAILABLE },
        selic: { ...UNAVAILABLE },
    };
}
