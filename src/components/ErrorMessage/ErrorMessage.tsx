import css from './ErrorMessage.module.css';

export const ErrorMessage = () => {
    return <p className = {css.text}>Note: both your Access Key and Secret Key must remain confidential.</p>
}