import React from 'react'
import organizations from '../data/organizations'
import ListBox from './ListBox'
import Website from './Icons/Website'
import Facebook from './Icons/Facebook'
import Twitter from './Icons/Twitter'
import Instagram from './Icons/Instagram'

const IMAGE_URL = 'https://s3-us-west-2.amazonaws.com/fuelbag-images/charity'

export default () => (
  <div style={{
    display: 'flex',
    justifyContent: 'center',
  }}>
    <div style={{
      margin: 20,
    }}>
      <div style={{
        fontSize: 40,
        fontWeight: 'bold',
        color: '#35a2ca',
        paddingBottom: 30,
        textAlign: 'center',
      }}>
        Charity organizations
      </div>
      {organizations.map((org, index) =>
        <ListBox key={index}>
          <div style={{
            marginRight: 40,
          }}>
            <img src={`${IMAGE_URL}/${org.logo}`} width={230} />
          </div>
          <div style={{width: '100%'}}>
            <div style={{
              textTransform: 'uppercase',
              fontWeight: 'bold',
              fontSize: 22,
            }}>
              {org.name}
            </div>
            <div style={{
              paddingTop: 20,
            }}>
              {org.goal}
            </div>
            <div style={{
              paddingTop: 20,
            }}>
              Volunteer opportunities:
            </div>
            <ul style={{
              paddingLeft: 20,
              paddingTop: 10,
            }}>
              {org.positions.map((position, index) =>
                <li key={index}>{position}</li>
              )}
            </ul>
            <div style={{
              display: 'flex',
              paddingTop: 10,
            }}>
              <a href={org.website} target="_blank" ><Website /></a>
              <a href={org.facebook} target="_blank" ><Facebook /></a>
              <a href={org.twitter} target="_blank" ><Twitter /></a>
              <a href={org.instagram} target="_blank" ><Instagram /></a>
            </div>
          </div>
        </ListBox>
      )}
    </div>
  </div>
)
