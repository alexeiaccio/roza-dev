/* global tw */
import React from 'react'
import { graphql } from 'gatsby'
import { css } from 'emotion'

import { uuid } from '../helpers'

export default ({ data }) => (
  <>
    <h1
      className={css`
        ${tw(['text-lg'])};
      `}
    >
      {data.homepage.data.title.text}
    </h1>
    <div>
      {data.homepage.data.body.map(({ primary, __typename }) => (
        <div key={uuid()}>
          {__typename === 'PrismicHomepageBodyText' && (
            <div
              key={uuid()}
              dangerouslySetInnerHTML={{ __html: primary.text.html }}
            />
          )}
        </div>
      ))}
    </div>
  </>
)

export const pageQuery = graphql`
  query IndexQuery {
    homepage: prismicHomepage {
      data {
        title {
          text
        }
        body {
          __typename
          ... on PrismicHomepageBodyText {
            primary {
              text {
                html
              }
            }
          }
        }
      }
    }
  }
`
