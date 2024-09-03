type CustomBreakLineParserProps = {
    content: string;
}

/**
 * Parses a string and formats it by converting specific markers into HTML line breaks.
 * @param {string} content - The input string to be parsed and formatted. 
 *                           Use `\n` or `###br###` for regular line breaks, 
 *                           and `###br.className###` for a line break with a specific class.
 * @returns {React.ReactElement} - A React fragment containing the formatted string with line breaks represented as `<br>` elements.
 */
const parseBreakLine = (content: string): React.ReactElement => {

    const contentSegments = content.split((/(\n|###br\.[^#]+###|###br###)/));                

    const formattedContent = contentSegments.map((line, index) => {
        // \n or ###br### is a regular line break
        if (line === "\n" || line === '###br###') {
            return <br key={index} />;
        }
        // ###br.className### is a line break with a specified class name
        else if (line?.match(/###br\.(.*?)###/)) {
            const matchName = line.match(/(?<=###br\.).+?(?=###)/)?.[0] || ""; 
            return <br className={matchName} key={index} />            
        }
        // Regular text
        else {
            return line;
        }
    });        

    return <>{formattedContent}</>;
}


/**
 * Converts specific markers in a string into HTML line breaks for React components.
 * @param {string} content - The string to format; use \n or ###br.className### for line breaks
 * @returns {React.ReactElement} - The formatted string
 */
const CustomBreakLineParser = ({ content }: CustomBreakLineParserProps):React.ReactElement => {
    return parseBreakLine(content);    
}

export { parseBreakLine, CustomBreakLineParser };