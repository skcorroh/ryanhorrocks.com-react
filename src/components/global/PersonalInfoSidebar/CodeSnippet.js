import SyntaxHighlighter from 'react-syntax-highlighter';
import { vs2015 } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import "./CodeSnippet.css";

export default function CodeSnippet(){
    
    return (
        <div className="snippet">
            <SyntaxHighlighter language="javascript" style={vs2015} showLineNumbers={true}>

            {`( function daily_routine() {
  wake_up();
  eat();
  code();
  // sleep();
  daily_routine();
} )();`
            }
            </SyntaxHighlighter>
        </div>
    );
}