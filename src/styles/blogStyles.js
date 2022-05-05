import styled from 'styled-components'

export const NewBlogWrapper = styled.div`
  .postsContainer {
    display: grid;
    grid-template-columns: 300px 300px 300px;
    gap: 2px;
    column-gap: 20px;
    row-gap: 20px;
    justify-content: center;
    align-content: center;
  }

  border-radius: 4px;
  padding: 1rem;
`

export const BlogHeader = styled.section`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  padding: 20px;
  & .title_blog {
    align-self: center;
  }

  & div {
    flex: 1;

    & h1 {
      text-align: left;
      font-size: 2.4rem;
    }

    & h2 {
      text-align: left;
      line-height: 1.5;
      font-weight: 100;
      font-size: 2.5rem;
    }
  }
`

export const BlogIndexContainer = styled.div`
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;

  h1 {
    margin-bottom: 16px;
  }

  p {
    max-width: 260px;
    text-align: left;
  }

  .row {
    justify-content: space-between;
    display: flex;
  }

  .col-3 {
    align-items: center !important;
    text-align: left;
  }

  button {
    cursor: pointer;
    padding: 10px 16px;
    font: 600 16px 'Encode Sans Expanded', sans-serif;
    background-color: transparent;
    border-radius: 25px;
  }

  @media (max-width: 414px) {
    flex-direction: column;

    img {
      height: 300px;
    }

    .left {
      padding: 0 2rem;
    }

    .right {
      height: 500px;
      background-size: 80% !important;
    }
  }

  @media (max-width: 820px) {
    .right {
      background-size: 120%;
    }
  }
`

export const PostWrapper = styled.div`
  padding: 2rem 6rem;
  justify-content: center;
  align-content: center;

  .btn-back {
    padding: 1rem 2rem;
    box-shadow: 0px 0px 10px #3acb8c;
    border-radius: 16px;
    text-decoration: none;
    margin-bottom: 2rem;
  }

  @media (max-width: 414px) {
    padding: 2rem;
  }
`
