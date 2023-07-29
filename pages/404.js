
import { Flex ,Text,Button} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect } from "react";


const ErrorPage = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push('/')
    },2500)
  },[]);

  return (
      <Flex height="100vh" width="100%" bgColor="black" justifyContent="center" alignItems="center">
          <Flex flexDirection="column" gap="50px">
            <Text  color="white"  fontSize="72px" lineHeight="80px">
              Oops!
            </Text>
            <Text  fontSize="24px" lineHeight="28px" color="white" >
              We can’t seem to find the page you’re looking for.
            </Text>
            <Button  width="244px"> 
              back to homepage
            </Button>
            <Text  fontSize="72px" lineHeight="28px" color="white" >
              404
            </Text>
          </Flex>
          
          </Flex>
  );
};

export default ErrorPage;


