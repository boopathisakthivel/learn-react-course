import styles from './styles.module.css'

const componentStyles = {
    'primary': 'bg-indigo-600 text-white hover:bg-indigo-700 text-white text-sm leading-6 font-medium py-2 px-3 rounded-lg',
    'secondary': 'bg-slate-900 text-white hover:bg-slate-700 text-white text-sm leading-6 font-medium py-2 px-3 rounded-lg',

}

interface ButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'type'> {
    type?: 'primary' | 'secondary'
}

export function Button(props: ButtonProps) {
    const { className, type, ...restProps } = props;
    const _styles = type && componentStyles[type] ? componentStyles[type] : componentStyles['primary'];

    return <button className={`${_styles} ${className} ${styles.button}`} {...restProps}>{props?.children}</button>
}