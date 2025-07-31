import React, { useMemo } from 'react';
import { View, StyleSheet, Dimensions, ViewStyle } from 'react-native';
import AutoHeightWebView from 'react-native-autoheight-webview';
import { MathpixMarkdownModel, TMarkdownItOptions } from 'mathpix-markdown-it';

export type Theme = 'light' | 'dark' | 'custom';

export interface MDLatextTextProps {
  children: React.ReactNode;
  className?: string;
  widthsub?: number;
  fontSize?: number;
  containerStyle?: ViewStyle;
  webviewStyle?: ViewStyle;
  bodyStyle?: Partial<React.CSSProperties>;
  options?: Partial<TMarkdownItOptions>;
  bodyProps?: {
    class?: string;
    id?: string;
  };
  htmlWrapper?: (html: string) => string;
  theme?: Theme;
  zoomEnabled?: boolean;
}

/**
 * Convert camelCase to kebab-case for CSS string generation.
 */
const toKebabCase = (key: string): string =>
  key.replace(/[A-Z]/g, match => `-${match.toLowerCase()}`);

/**
 * Safely renders markdown to HTML with error handling.
 */
export function renderMarkdownToHtml(
  md: string,
  options: Partial<TMarkdownItOptions> = {}
): string {
  try {
    return MathpixMarkdownModel.markdownToHTML(md, {
      outMath: {
        include_mathml: true,
        include_asciimath: true,
        include_latex: true,
        include_svg: true,
        include_tsv: true,
        include_table_html: true,
      },
      forMD: true,
      ...options,
    });
  } catch (err: any) {
    return `<pre style="color:red;">Render error: ${err.message}</pre>`;
  }
}

export const MDLatextText: React.FC<MDLatextTextProps> = ({
  children,
  className,
  widthsub,
  fontSize = 14,
  containerStyle,
  webviewStyle,
  bodyStyle = {},
  options = {},
  bodyProps,
  htmlWrapper,
  theme = 'light',
  zoomEnabled = false,
}) => {
  const htmlContent = useMemo(() => {
    const defaultThemeStyles: Record<Theme, React.CSSProperties> = {
      light: {
        color: '#333',
        backgroundColor: '#fff',
      },
      dark: {
        color: '#fff',
        backgroundColor: '#121212',
      },
      custom: {},
    };

    const mergedBodyStyle: React.CSSProperties = {
      fontSize,
      marginBottom: 20,
      userSelect: 'none',
      overflow: 'hidden',
      wordWrap: 'break-word',
      height: 'auto',
      position: 'relative',
      lineHeight: 1.4,
      ...defaultThemeStyles[theme],
      ...bodyStyle,
    };

    const styleString = Object.entries(mergedBodyStyle)
      .map(([key, val]) => `${toKebabCase(key)}:${val};`)
      .join('\n');

    const html = `
      <html>
        <head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <style>
            body { ${styleString} }
            img {
              width: 100%;
              height: auto;
              margin-top: 10px;
            }
          </style>
        </head>
        <body${bodyProps?.class ? ` class="${bodyProps.class}"` : ''}${
          bodyProps?.id ? ` id="${bodyProps.id}"` : ''
        }>
          ${renderMarkdownToHtml(`${children}`, options)}
        </body>
      </html>
    `;

    return htmlWrapper ? htmlWrapper(html) : html;
  }, [children, options, bodyStyle, bodyProps, theme, htmlWrapper, fontSize]);

  return (
    <View className={`w-full ${className ?? ''}`} style={containerStyle}>
      <AutoHeightWebView
        originWhitelist={['*']}
        source={{ html: htmlContent }}
        scrollEnabled={false}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        scrollEnabledWithZoomedin={zoomEnabled}
        style={[
          styles.webview,
          {
            maxWidth: widthsub
              ? Dimensions.get('window').width - widthsub
              : '100%',
            minHeight: '100%',
            overflow: 'hidden',
          },
          webviewStyle,
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  webview: {
    flex: 1,
    backgroundColor: 'transparent',
  },
});
