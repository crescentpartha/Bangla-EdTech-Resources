import React from 'react';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { c, python } from 'react-syntax-highlighter/dist/esm/languages/prism';
SyntaxHighlighter.registerLanguage('c', c);
SyntaxHighlighter.registerLanguage('python', python);

const Dracula_SyntaxHighlighter = ({ code, language }) => {
    return (
        <SyntaxHighlighter language={language} style={dracula}>
            {code}
        </SyntaxHighlighter>
    );
};

export default Dracula_SyntaxHighlighter;