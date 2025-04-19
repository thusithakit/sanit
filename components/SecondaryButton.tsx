import { Button } from "./ui/button"

const SecondaryButton = ({ children }: { children: React.ReactNode }) => {
    return (
        <Button variant="outline" asChild className="bg-white group hover:bg-[#0C5ADB] hover:text-white transition-colors duration-300 ease-in-out rounded-full">
            {children}
        </Button>
    )
}

export default SecondaryButton