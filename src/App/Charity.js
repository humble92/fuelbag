import React from 'react'
import organizations from '../data/organizations'
import ListBox from './ListBox'

const IMAGE_URL = 'https://s3-us-west-2.amazonaws.com/fuelbag-images'

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
              <li>shop assistant</li>
              <li>barber</li>
            </ul>
            <div style={{
              display: 'flex',
              justifyContent: 'flex-end',
            }}>
              <div style={{
                userSelect: 'none',
                backgroundColor: '#35a2ca',
                padding: 15,
                color: 'white',
                boxShadow: '0 2px 8px 0 rgba(0, 0, 0, 0.5)',
                borderRadius: 10,
                cursor: 'pointer',
              }}>
                Volunteer
              </div>
            </div>
          </div>
        </ListBox>
      )}
    </div>
  </div>
)
