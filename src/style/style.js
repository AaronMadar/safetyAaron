let innerLeftBoxCss = { flex: 1, margin: 2, display: "flex", flexDirection: "column", gap: 2, direction:"rtl"}

let innerRightBoxCss = { flex: 1, margin: 2, display: "flex", flexDirection: "column", gap: 2 }

let mainBoxCss = { display: "flex", flexDirection: { xs: "column", sm: "column", md: "row", dl: 'row' }, gap: 2, minHeight: '100vh', paddingTop: 4, backgroundColor: 'background.default' }

let buttonSubmitCss = { width: 'fit-content', alignSelf: { xs: 'center', sm: 'flex-end' }, marginTop: 2 }


export { mainBoxCss, innerRightBoxCss, innerLeftBoxCss , buttonSubmitCss }
