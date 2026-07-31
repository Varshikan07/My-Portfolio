import { useState } from 'react'

export function OrbitalScene() {
  const [portraitAvailable, setPortraitAvailable] = useState(true)
  return <div className="orbital-scene" aria-hidden="true"><div className="portrait-frame">
    {portraitAvailable ? <img className="portrait-image" src="./portrait.jpg" alt="" onError={() => setPortraitAvailable(false)} /> : <div className="portrait-placeholder"><span>VK</span><small>PORTRAIT<br/>PLACEHOLDER</small></div>}
  </div><div className="orbit orbit-a"><b /></div><div className="orbit orbit-b"><b /></div><div className="hairline" /><span className="scene-label top">OPEN TO WORK</span><span className="scene-label bottom">CHENNAI · INDIA</span></div>
}
