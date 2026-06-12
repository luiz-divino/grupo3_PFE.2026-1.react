export const FormSubmitFields = ({ subject, formName }) => (
    <>
        <input type="hidden" name="_subject" value={subject} />
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_template" value="table" />
        {formName ? (
            <input type="hidden" name="formulario" value={formName} />
        ) : null}
    </>
);
