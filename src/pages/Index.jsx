import { Box, ChakraProvider, Flex, Grid, GridItem, Heading, Stat, StatLabel, StatNumber, StatHelpText, Text, theme } from "@chakra-ui/react";
import { FaChartLine, FaDollarSign, FaShoppingCart } from "react-icons/fa";

const DashboardStat = ({ icon, label, value, sublabel }) => (
  <Stat p={4} shadow="md" border="1px" borderColor="gray.200" borderRadius="md">
    <Flex alignItems="center">
      <Box fontSize="3xl" color="teal.500" as={icon} />
      <Box ml={4}>
        <StatLabel fontWeight="bold">{label}</StatLabel>
        <StatNumber>{value}</StatNumber>
        <StatHelpText>{sublabel}</StatHelpText>
      </Box>
    </Flex>
  </Stat>
);

const Index = () => {
  return (
    <ChakraProvider theme={theme}>
      <Box p={8}>
        <Heading mb={6}>Business Dashboard</Heading>
        <Grid templateColumns="repeat(3, 1fr)" gap={6}>
          <GridItem w="100%">
            <DashboardStat icon={FaShoppingCart} label="Sales" value="1,280" sublabel="Since last week" />
          </GridItem>
          <GridItem w="100%">
            <DashboardStat icon={FaDollarSign} label="Revenue" value="$6,400" sublabel="Since last week" />
          </GridItem>
          <GridItem w="100%">
            <DashboardStat icon={FaChartLine} label="Growth" value="14.5%" sublabel="Since last month" />
          </GridItem>
        </Grid>
        <Box mt={10}>
          <Heading size="md" mb={4}>
            Key Metrics
          </Heading>
          <Grid templateColumns="repeat(3, 1fr)" gap={6}>
            {/* More dashboard stats can be added here */}
          </Grid>
        </Box>
      </Box>
    </ChakraProvider>
  );
};

export default Index;
