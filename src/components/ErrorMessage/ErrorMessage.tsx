interface IErrorMessageProps {
    message?: string;
}

const ErrorMessage: React.FC<IErrorMessageProps> = ({
    message = "❗Oops, something went wrong❗",
}) => {
return (
    <div>
        <p>{message}</p>
    </div>
);
};

export default ErrorMessage;