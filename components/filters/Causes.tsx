import { InputGroup, InputLeftElement } from '@chakra-ui/react';
import {
  AutoComplete,
  AutoCompleteInput,
  AutoCompleteItem,
  AutoCompleteList
} from '@choc-ui/chakra-autocomplete';
import { Filters } from '../layouts/Menu';
import { Dispatch, SetStateAction } from 'react';
import Image from 'next/image';

type Props = {
  filters: Filters;
  setFilters: Dispatch<SetStateAction<Filters>>;
  causes: {
    id: number;
    label: string;
  }[];
};

export const FilterCauses = (props: Props) => {
  const { filters, setFilters, causes } = props;
  return (
    <InputGroup zIndex={1}>
      <InputLeftElement
        pointerEvents="none"
        top="50%"
        transform="translateY(-50%)"
      >
        <Image
          src="icons/search-text.svg"
          color="gray.300"
          alt="Icone de recherche"
          width={24}
          height={24}
        />
      </InputLeftElement>
      <AutoComplete
        openOnFocus
        onChange={(val: number) => {
          setFilters({ ...filters, causes: [val] });
        }}
      >
        <AutoCompleteInput pl={10} />
        <AutoCompleteList>
          {causes.map(cause => (
            <AutoCompleteItem
              key={`option-${cause.id}`}
              value={cause.id}
              getValue={() => cause.label}
              textTransform="capitalize"
            >
              {cause.label}
            </AutoCompleteItem>
          ))}
        </AutoCompleteList>
      </AutoComplete>
    </InputGroup>
  );
};
