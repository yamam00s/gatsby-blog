import Typography from "typography"
import kirkhamTheme from "typography-theme-kirkham"

const typography: Typography = new Typography(kirkhamTheme)
export default typography
export const rhythm: (num: number) => string = typography.rhythm