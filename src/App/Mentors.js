import React from 'react'
import mentors from '../data/mentors'
import ListBox from './ListBox'
import lindedIn from './linkedin.png'

const IMAGE_URL = 'https://s3-us-west-2.amazonaws.com/fuelbag-images/mentors'

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
        Mentors
      </div>
      {mentors.map((mentor, index) =>
        <ListBox key={index}>
          <div style={{
            marginRight: 40,
          }}>
            <img src={`${IMAGE_URL}/${mentor.logo}`} width={230} />
          </div>
          <div style={{width: '100%'}}>
            <div style={{
              textTransform: 'uppercase',
              fontWeight: 'bold',
              fontSize: 22,
            }}>
              {mentor.firstName} {mentor.lastName}
            </div>
            <div style={{
              paddingTop: 20,
              fontWeight: 'bold',
              color: '#35a2ca',
            }}>
              {mentor.role}
            </div>
            <div style={{
              paddingTop: 20,
            }}>
              {mentor.company}
            </div>
            <div style={{
              paddingTop: 20,
              display: 'flex',
              justifyContent: 'space-between',
            }}>
              <div>
                <a href={mentor.linkedIn} target="_blank">
                  <img src={lindedIn} height={25} />
                </a>
              </div>
            </div>
          </div>
        </ListBox>
      )}
    </div>
  </div>
)
