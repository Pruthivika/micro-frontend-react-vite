import { Component } from "react";
import { Box, Text, Button, Image } from "@chakra-ui/react";
import errorFoundImage from "../assets/undraw_page-not-found.svg";

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        console.error("Error caught in ErrorBoundary:", error, errorInfo);
    }

    handleReload = () => {
        this.setState({ hasError: false });
        window.location.reload();
    };

    render() {
        if (this.state.hasError) {
            return (
                <Box p={5} textAlign="center" display={'flex'} flexDirection={'column'} alignItems={'center'} gap={10}>
                    <Image src={errorFoundImage} alt="Under Construction" boxSize={'50%'} />
                    <Text fontSize="xl" color="#6c63fe">
                        Something went wrong!
                    </Text>
                    <Button
                        mt={3}
                        color="#6c63fe"
                        backgroundColor="white"
                        border="1px solid #6c63fe"
                        _hover={{
                            backgroundColor: "#6c63fe",
                            color: "white",
                            transform: "scale(1.05)",
                            transition: "all 0.2s ease-in-out",
                        }}
                        _active={{
                            transform: "scale(0.95)",
                        }}
                        onClick={this.handleReload}
                    >
                        Reload Page
                    </Button>
                </Box>
            );
        }
        return this.props.children;
    }
}

export default ErrorBoundary;
