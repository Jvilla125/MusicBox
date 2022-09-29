import { token } from "morgan";
import tokenService from "./tokenService";

const BASE_URL= "/api/";

export function create(postId) {
    return fetch(`${BASE_URL}posts/${postId}/listenlater`, {
      method: "POST",
      headers: {
        Authorization: "Bearer " + tokenService.getToken(), // This grabs thee JWT token out
        // local storage and send its in the header to the server
      },
    }).then((res) => {
      if (res.ok) return res.json();
      throw new Error(res.error);
    });
  }

  export function removeListenLater(listenLaterId) {
    return fetch(`${BASE_URL}listenlater/${listenLaterId}`, {
      method: "DELETE",
      headers: {
        Authorization: "Bearer " + tokenService.getToken(), // This grabs thee JWT token out
        // local storage and send its in the header to the server
      }
    }).then((res) => {
      if (res.ok) return res.json();
      throw new Error(res.error);
    });
  }

  export function getAll(){
    return fetch(BASE_URL, {
      headers: {
        'Authorization': 'Bearer ' + tokenService.getToken(),
      },
    }).then((res)=> {
      if(res.ok) return res.json();
      return res.json().then(response => {
        throw new Error(response.err)
      })
    })
  }