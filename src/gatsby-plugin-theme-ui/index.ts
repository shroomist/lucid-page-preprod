const colors = {
  text: '#000',
  white: '#efefef',
  background: '#efefef',
  primary: '#f58c43',
  secondary: '#30c',
  muted: '#f6f6f6',
  modes: {
    dark: {
      bg: "#2e2e2e",
      text: "#fff",
    }
  }
}

export default {
  initialColorModeName: 'light',
  colors,
  space: [
    0,
    4,
    8,
    16,
    32,
    64,
    128,
    256,
    512
  ],
  fonts: {
    body: 'Barlow, Helvetica Neue, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    heading: 'inherit',
    monospace: 'Menlo, monospace'
  },
  fontSizes: [
    12,
    14,
    16,
    20,
    24,
    32,
    48,
    64,
    96
  ],
  fontWeights: {
    body: 300,
    heading: '300',
    bold: 500
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125
  },
  styles: {
    root: {
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body',
    },
    h1: {
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 700,
      fontSize: 6
    },
    h2: {
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 5
    },
    h3: {
      color: 'primary',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 4
    },
    h4: {
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 3
    },
    h5: {
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 2
    },
    h6: {
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 0
    },
    p: {
      color: 'text',
      fontFamily: 'body',
      fontWeight: 'body',
      lineHeight: 'body'
    },
    a: {
      color: 'primary'
    },
    pre: {
      fontFamily: 'monospace',
      overflowX: 'auto',
      code: {
        color: 'inherit'
      }
    },
    code: {
      fontFamily: 'monospace',
      fontSize: 'inherit'
    },
    table: {
      width: '100%',
      borderCollapse: 'separate',
      borderSpacing: 0
    },
    th: {
      textAlign: 'left',
      borderBottomStyle: 'solid'
    },
    td: {
      textAlign: 'left',
      borderBottomStyle: 'solid'
    },
    img: {
      maxWidth: '100%'
    },
    navlink: {
      color: colors.modes.dark.text,
      textDecoration: 'none',
      px: [2, 4],
      py: 3,
      ":hover": {
        color: "primary"
      }
    },
    em: {
      fontStyle: 'normal',
      color: 'primary'
    },
    header: {
      bg: 'rgba(50,50,50,90%)',
      borderBottom: `1px solid ${colors.white}`
    }
  }
}

// const heading = {
//   fontFamily: 'heading',
//   fontWeight: 'heading',
//   lineHeight: 'heading',
// }

// const colors = {
//   text: '#202124',
//   background: '#fff',
//   primary: '#1a73e8',
//   secondary: '#30c',
//   highlight: '#efeffe',
//   muted: '#f1f3f4',
//   gray: '#777',
//   accent: '#609',
//   hot: 'red',
//   definition: 'rgba(255, 255, 255, 0.1)',
//   modes: {
//     dark: {
//       text: 'hsl(210, 50%, 96%)',
//       background: 'hsl(230, 25%, 18%)',
//       primary: 'hsl(260, 100%, 80%)',
//       secondary: 'hsl(290, 100%, 80%)',
//       highlight: 'hsl(260, 20%, 40%)',
//       purple: 'hsl(290, 100%, 80%)',
//       muted: 'hsla(230, 20%, 0%, 20%)',
//       gray: 'hsl(210, 50%, 60%)',
//     },
//   },
// }

// const fonts = {
//   body: 'Barlow, Helvetica Neue, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
//   monospace: 'Menlo, monospace',
// }
// const fontSizes = [12, 14, 16, 20, 24, 32, 48, 64, 72]

// const fontWeights = {
//   body: 400,
//   heading: 800,
//   display: 900,
// }

// const lineHeights = {
//   body: 1.5,
//   heading: 1.25,
// }

// const cards = {
//   primary: {
//     padding: 3,
//     transition: '0.3s',
//     '&:hover': {
//       boxShadow: '0 8px 16px 0 rgba(0,0,0,0.2)',
//     },
//   },
// }

// const buttons = {
//   primary: {
//     transition: '0.3s',
//     '&:hover': {
//       bg: 'secondary',
//       cursor: 'pointer',
//     },
//   },
//   icon: {
//     outline: 'none',
//     '&:hover': {
//       cursor: 'pointer',
//     },
//   },
// }

// const badges = {
//   tag: {
//     transition: '0.3s',
//     color: 'background',
//     '&:hover': {
//       bg: 'highlight',
//       color: 'text',
//       transform: 'scale(1.1)',
//     },
//   },
// }

// const layout = {
// }

// const styles = {
//   Container: {
//     p: 3,
//     maxWidth: 1024,
//   },
//   root: {
//     fontFamily: 'body',
//     lineHeight: 'body',
//     fontWeight: 'body',
//     fontSize: [2, 4],
//     a: {
//       color: 'primary',
//       textDecoration: 'none',
//       transition: '0.3s',
//       '&:hover': {
//         color: 'secondary',
//       },
//     },
//     button: {
//       transition: '0.3s',
//     },
//     h1: {
//       variant: 'textStyles.display',
//     },
//     h2: {
//       variant: 'textStyles.heading',
//       fontSize: 5,
//     },
//     h3: {
//       variant: 'textStyles.heading',
//       fontSize: 4,
//     },
//     h4: {
//       variant: 'textStyles.heading',
//       fontSize: 3,
//     },
//     h5: {
//       variant: 'textStyles.heading',
//       fontSize: 2,
//     },
//     h6: {
//       variant: 'textStyles.heading',
//       fontSize: 1,
//     },
//     pre: {
//       variant: 'hljs',
//       fontFamily: 'monospace',
//       fontSize: 1,
//       p: 3,
//       color: 'text',
//       bg: 'muted',
//       overflow: 'auto',
//       borderRadius: '1em',
//       code: {
//         color: 'inherit',
//       },
//     },
//     code: {
//       fontFamily: 'monospace',
//       color: 'secondary',
//       fontSize: 1,
//     },
//     inlineCode: {
//       fontFamily: 'monospace',
//       color: 'secondary',
//       bg: 'muted',
//     },
//     table: {
//       width: '100%',
//       my: 4,
//       borderCollapse: 'separate',
//       borderSpacing: 0,
//       'th,td': {
//         textAlign: 'left',
//         py: '4px',
//         pr: '4px',
//         pl: 0,
//         borderColor: 'muted',
//         borderBottomStyle: 'solid',
//       },
//     },
//     th: {
//       verticalAlign: 'bottom',
//       borderBottomWidth: '2px',
//     },
//     td: {
//       verticalAlign: 'top',
//       borderBottomWidth: '1px',
//     },
//     hr: {
//       border: 0,
//       borderBottom: '1px solid',
//       borderColor: 'muted',
//     },
//     img: {
//       maxWidth: '100%',
//     },
//     figure: {
//       fontSize: 1,
//       textAlign: 'center',
//       color: 'gray',
//     },
//     // --- footnotes ---
//     '#footnotes': {
//       p: 2,
//       borderColor: 'gray',
//       borderWidth: 1,
//       borderTopStyle: 'solid',
//       // bg: 'muted',
//       position: 'relative',
//     },
//     '#footnotes::before': {
//       color: 'gray',
//       content: '"FOOTNOTES"',
//       fontWeight: 900,
//       fontSize: 2,
//       position: 'absolute',
//       top: 1,
//       right: 1,
//     },
//     '.footnote-label': {
//       fontSize: 1,
//       color: 'secondary',
//     },
//     '.footnote-content p': {},
//   },
// }

// const hljs = [
//   {
//     selectors: ['comment', 'operator', 'punctuation'],
//     style: { color: 'gray' },
//   },
//   {
//     selectors: ['comment'],
//     style: { fontStyle: 'italic' },
//   },
//   {
//     selectors: ['keyword'],
//     style: { color: 'primary' },
//   },
//   {
//     selectors: [
//       'class',
//       'type',
//       'title',
//       'number',
//       'variable',
//       'symbol',
//       'function',
//       'params',
//       'regexp',
//     ],
//     style: { color: 'secondary' },
//   },
//   {
//     selectors: [
//       'selector-tag',
//       'selector-id',
//       'selector-class',
//       'selector-attr',
//       'selector-pseudo',
//       'built_in',
//       'string',
//     ],
//     style: { color: 'secondary' },
//   },
// ].reduce(
//   (styles, { selectors, style }) => ({
//     ...styles,
//     [`${selectors.map((s) => `.hljs-${s}`).join(',')}`]: style,
//   }),
//   {}
// )

// export const orga = {
//   useColorSchemeMediaQuery: true,
//   colors,
//   fonts,
//   fontSizes,
//   fontWeights,
//   lineHeights,
//   textStyles: {
//     heading,
//     display: {
//       variant: 'textStyles.heading',
//       fontSize: [5, 6],
//       fontWeight: 'display',
//       letterSpacing: '-0.03em',
//       mt: 3,
//     },
//   },
//   text: {
//     heading: {
//       fontFamily: 'inherit'
//     }
//   },
//   cards,
//   buttons,
//   badges,
//   layout,
//   styles,
//   hljs,
//   prism: {
//     '.comment,.prolog,.doctype,.cdata,.punctuation,.operator,.entity,.url': {
//       color: 'gray',
//     },
//     '.comment': {
//       fontStyle: 'italic',
//     },
//     '.property,.tag,.boolean,.number,.constant,.symbol,.deleted,.function,.class-name,.regex,.important,.variable':
//       {
//         color: 'purple',
//       },
//     '.atrule,.attr-value,.keyword': {
//       color: 'primary',
//     },
//     '.selector,.attr-name,.string,.char,.builtin,.inserted': {
//       color: 'secondary',
//     },
//   },
// }

// export default orga
