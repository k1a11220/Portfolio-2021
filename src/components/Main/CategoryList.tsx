import React, { FunctionComponent, ReactNode } from "react";
import styled from "styled-components";
import { Link } from "gatsby";

type CategoryItemProps = {
  active: boolean;
};

type GatsbyLinkProps = {
  children: ReactNode;
  className?: string;
  to: string;
} & CategoryItemProps;

export interface CategoryListProps {
  selectedCategory: string;
  categoryList: {
    [key: string]: number;
  };
}

const CategoryListWrapper = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  width: 1200px;
  margin: 100px auto 0;

  @media (max-width: 1400px) {
    width: 92%;
  }
`;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const CategoryItem = styled(({ active, ...props }: GatsbyLinkProps) => (
  <Link {...props} />
))<CategoryItemProps>`
  margin-right: 24px;
  font-size: 1.5rem;
  font-weight: ${({ active }) => (active ? "700" : "500")};
  color: ${({ active }) => (active ? "#0a0a0a" : "gray")};
  cursor: pointer;

  &:last-of-type {
    margin-right: 0;
  }

  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
`;

const CategoryList: FunctionComponent<CategoryListProps> = function ({
  selectedCategory,
  categoryList,
}) {
  return (
    <CategoryListWrapper>
      {Object.entries(categoryList).map(([name, count]) => (
        <CategoryItem
          to={`/categories/?category=${name}`}
          active={name === selectedCategory}
          key={name}
        >
          {name}
        </CategoryItem>
      ))}
    </CategoryListWrapper>
  );
};
export default CategoryList;
