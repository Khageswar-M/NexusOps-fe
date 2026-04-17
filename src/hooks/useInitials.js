import { useMemo } from "react";

const useInitials = (name) => {
    return useMemo(() => {
        if(!name) return "?";

        return name
            .trim()
            .split(" ")
            .map(word => word[0] || "")
            .join("")
            .toUpperCase();
    }, [name]);
}
export default useInitials;