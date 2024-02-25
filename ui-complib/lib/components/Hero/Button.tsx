import { type IconMapType, IconMap } from "./Icon";

type ButtonStylesType = { [n: string]: string };
const ButtonStyles: ButtonStylesType = {
    'primary': ' text-white bg-blue-700 hover:bg-blue-800 focus:ring-primary-300 dark:focus:ring-primary-900',
    'secondary': ' text-gray-900 border border-gray-300 hover:bg-gray-100 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800'
};

function Button({ type, text, prefixIcon, postfixIcon }: { type: keyof ButtonStylesType, text: string, prefixIcon?: keyof IconMapType, postfixIcon?: keyof IconMapType }) {
    return (
        <a href="#" className={`inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center rounded-lg focus:ring-4${ButtonStyles[type]}`} >
            {prefixIcon ? IconMap[prefixIcon] : null}
            {text}
            {postfixIcon ? IconMap[postfixIcon] : null}
        </a >
    );
}

export { type ButtonStylesType, Button };