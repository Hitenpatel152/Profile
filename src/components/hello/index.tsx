import { useStyles } from "./index.styles"

export const Hello = () => {
    const claases = useStyles()
    return <div className={claases.title}>Hello</div>
}