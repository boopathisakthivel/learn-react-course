import { type IconMapType } from "./Icon";
import { type ButtonStylesType, Button } from "./Button";

function Hero({ title, description, links, additionalHeader }: { title: string, description: string, links?: Array<{ type: keyof ButtonStylesType, text: string, prefixIcon?: keyof IconMapType, postfixIcon?: keyof IconMapType }>, additionalHeader?: string }): React.ReactNode {

    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
                {
                    additionalHeader && <strong>{additionalHeader}</strong>
                }
                <h1 className="text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">{title}</h1>
                <p className="mt-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">{description}</p>
                {
                    (links && links.length > 0) && (
                        <div className="flex flex-col mt-8 lg:mt-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
                            {
                                links.map(link => {
                                    return <Button type={link.type} text={link.text} prefixIcon={link.prefixIcon} postfixIcon={link.postfixIcon} />;
                                })
                            }

                        </div>
                    )
                }
            </div>
        </section>
    );
}

export default Hero;