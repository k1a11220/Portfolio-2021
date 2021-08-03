import React from "react";
import styled from "styled-components";
import CenteredImg from "./centeredImg";

const Card = ({ thumbnail, alt, client, title }) => {
  return (
    <Wrapper>
      <CenteredImg src={thumbnail} alt={alt} />
      <Text>
        <div>
          <Client>{client}</Client>
          <Title>{title}</Title>
          {/* <Desc>{desc}</Desc> */}
        </div>
        {/* <DateTime dateTime={date}>{date}</DateTime> */}
      </Text>
    </Wrapper>
  );
};

const Text = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  opacity: 0;
  flex: 1 1 auto;
  justify-content: center;
  align-items: flex-start;
  padding: var(--sizing-lg);
  width: 100%;
  height: 100%;

  & > * {
    display: block;
  }
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  height: 380px;
  border-radius: var(--border-radius-base);
  background-color: var(--color-card);

  @media (max-width: ${({ theme }) => theme.device.md}) {
    height: 270px;
  }

  @media (max-width: ${({ theme }) => theme.device.sm}) {
    height: 64vw;
  }

  /* Fix Safari overflow:hidden with border radius not working error */
  transform: translateZ(0);

  &:hover ${Text} {
    opacity: 1;
  }
`;

const Client = styled.span`
  display: block;
  font-size: 0.875rem;
  font-weight: var(--font-weight-semi-bold);
  color: var(--color-text-3);
`;

const Title = styled.h3`
  margin-top: var(--sizing-xs);
  font-size: var(--text-lg);
  font-weight: var(--font-weight-bold);
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  line-height: 1.25;

  @media (max-width: ${({ theme }) => theme.device.md}) {
    font-size: 1.3125rem;
  }

  @media (max-width: ${({ theme }) => theme.device.sm}) {
    font-size: var(--text-md);
  }
`;

export default Card;
