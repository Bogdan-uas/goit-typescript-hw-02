import toast from "react-hot-toast";

interface IToasterProps {
    message: string;
    duration?: number;
    position?: string;
}

export const showError: (error: string) => void = (error) => {
toast.error(error, {
    duration: 6000,
    position: "top-center",
});
};