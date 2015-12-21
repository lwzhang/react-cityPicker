/**
 * Created by cqq on 2015/12/21.
 */
import React from "react";

class LetterPrompt extends React.Component {
    render () {
        return (
            <div className="prompt">
                {this.props.letter}
            </div>
        )
    }
}

export default LetterPrompt;