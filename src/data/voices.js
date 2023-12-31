import drake from '../data/drake.vc'
import drakeProfile from '../data/drakeProfile.jpg'
import taylorSwift from '../data/taylorSwift.vc'
import taylorSwiftProfile from '../data/taylorSwiftProfile.jpg'
import lilBaby from '../data/lilBaby.vc'
import lilBabyProfile from '../data/lilBabyProfile.jpg'
import profile from '../data/profile.png'

export const voices = [
    {
        id:0,
        "name": "Voice Upload",
        "genre": "Custom",
        "profile": profile,
        "src": ""
    },
    {
        id: 1,
        name: 'No Voice Selected',
        genre: 'N/A',
        profile: profile,
        src: ''
    },
    {
        id: 2,
        name: 'Drake',
        genre: 'Rap',
        profile: drakeProfile,
        src: drake
    }, 
    {
        id: 3,
        name: 'Taylor Swift',
        genre: 'Pop',
        profile: taylorSwiftProfile,
        src: taylorSwift
    },
    {
        id: 4,
        name: 'Lil Baby',
        genre: 'Rap',
        profile: lilBabyProfile,
        src: lilBaby
    }
]