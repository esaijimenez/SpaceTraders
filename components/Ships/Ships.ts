import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './Ships.html',
    styleUrls: ['./Ships.css']
})
export class ShipsComponent {
    //Properties
    getAgentOptions = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 
            'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZGVudGlmaWVyIjoiU000TExGUlkiLCJ2ZXJzaW9uIjoidjIiLCJyZXNldF9kYXRlIjoiMjAyMy0wNi0wMyIsImlhdCI6MTY4NjI2NzIxNiwic3ViIjoiYWdlbnQtdG9rZW4ifQ.aQ8tmR9WnUMLV93O1duIswcpRcb4my-fANV6NMsfWOsgZidjNdN33FokKe8Xyp2S198v0QEJpAqeDqjhuisPz8u86qz_XPSyqe3jsL0rcwkVjv_wrisvCjW7-vlWoxAaCniE9uclpyVLuTslurMQuoWcy5gdL0s7iwvIxA_MMawL9LAk-gpyiODZlmKvztymvO7c5XRii_v0UQvvApclhwRDrbtt_IGHQTS0HZAYRkIC1IWoflXJqWYKooxmbDAh9ggA22lW1XFUy6znV3qQ4NCGVApaHx5IwwTf0w2FpqpYv9MidBwt4O-f1tVSDioavQgMZA2n1f1swibHQ4VE8Q'
        },
    };

    //Methods
    getAgent(){
        fetch('https://api.spacetraders.io/v2/my/agent', this.getAgentOptions)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
    }
}