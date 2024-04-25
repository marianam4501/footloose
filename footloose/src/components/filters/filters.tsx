import { Dropdown } from "react-bootstrap";
import "./styles.scss";
import { FC } from 'react';

interface FilterProps {
    children: React.ReactNode;
}

const Filter: FC<FilterProps> = ({children}) => {
    
    return(
        <>
        <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
            Filter by category
        </Dropdown.Toggle>

        <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </Dropdown.Menu>
        </Dropdown>
        {children}
        </>
    );
};

export default Filter;

/*
<div class="dropdown filter">
          <button class="btn filter__button dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
            Filter by category
          </button>
          <ul class="dropdown-menu filter__options" id="filters" aria-labelledby="dropdownMenuButton1">
            <p class="filter__category-title">Select a category</p>
            
          </ul>
        </div>
*/