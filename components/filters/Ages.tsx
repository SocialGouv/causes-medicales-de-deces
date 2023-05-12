import { Dispatch, SetStateAction } from 'react';
import { Filters } from '../layouts/Menu';
import { MenuSubTitle } from '../layouts/MenuSubTitle';
import { Box, Checkbox, Flex, Text } from '@chakra-ui/react';

type Props = {
  filters: Filters;
  setFilters: Dispatch<SetStateAction<Filters>>;
  ages: { id: number; label: string; minAge: number; maxAge?: number }[];
};

export const FiltersAges = (props: Props) => {
  const { filters, setFilters, ages } = props;
  return (
    <Box>
      <MenuSubTitle title="Ages" />
      <Flex gap={4} flexDirection="column">
        {ages.map((age, index) => (
          <Checkbox
            key={index}
            borderColor="primary.500"
            colorScheme="primary"
            value={age.id}
            onChange={e => {
              if (e.target.checked) {
                setFilters({
                  ...filters,
                  ages: [...filters.ages, { min: age.minAge, max: age.maxAge }]
                });
              } else {
                setFilters({
                  ...filters,
                  ages: [...filters.ages.filter(a => a.min !== age.minAge)]
                });
              }
            }}
          >
            <Text
              as={
                filters.ages.includes({ min: age.minAge, max: age.maxAge })
                  ? 'b'
                  : 'span'
              }
            >
              {age.label}
            </Text>
          </Checkbox>
        ))}
      </Flex>
    </Box>
  );
};
