import React from 'react';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneLight } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { c, python } from 'react-syntax-highlighter/dist/esm/languages/prism';
SyntaxHighlighter.registerLanguage('c', c);
SyntaxHighlighter.registerLanguage('python', python);

const CodeSyntaxHighlighter = ({ code, language }) => {
    return (
        <SyntaxHighlighter language={language} style={oneLight}>
            {code}
        </SyntaxHighlighter>
    );
};

export default CodeSyntaxHighlighter;