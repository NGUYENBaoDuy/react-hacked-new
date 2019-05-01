import React from "react";
import "./Story.css";


const Story = ({story, columns, onArchive}) => {
    const {
        title,
        url,
        author,
        num_component,
        point,
        objectID,
    } = story;
    return (
        <div className="story">
            <span style={{width: columns.title.width}}>
                <a href={url}>{title}</a>
            </span>
            <span style={{width: columns.author.width}}>{author}</span>
            <span style={{width: columns.comments.width}}>{num_component}</span>
            <span style={{width: columns.points.width}}>{point}</span>
            <span style={{width: columns.archive.width}}>
                <ButtonInline onClick={() => onArchive(objectID)}>
                    Archive
                </ButtonInline>
            </span>
        </div>

    );
};

const Button =
    ({
         onClick,
         className,
         type = "button",
         children
     }) =>
        <button type={type}
                className={className}
                onClick={onClick}>
            {children}
        </button>;


const ButtonInline =
    ({
         onClick,
         type = "button",
         children
     }) =>
        <Button
            type={type}
            className="button-inline"
            onClick={onClick}>
            {children}
        </Button>;

export default Story;
