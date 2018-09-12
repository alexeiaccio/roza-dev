/* global tw */
import React from 'react'
import { graphql } from 'gatsby'
import { css } from 'emotion'

export default ({ data }) => (
  <div
    className={css`
      ${tw(['text-lg'])};
    `}
  >
    {data.homepage.data.title.text}
  </div>
)

export const pageQuery = graphql`
  query IndexQuery {
    homepage: prismicHomepage {
      data {
        title {
          text
        }
      }
    }
  }
`
