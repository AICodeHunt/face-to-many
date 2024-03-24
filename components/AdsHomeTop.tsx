import React, { useEffect } from 'react';

export const AdsHomeTop = () => {
  useEffect(() => {
    // load Google AdSense lib
    const script = document.createElement('script');
    script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3672455877501055';
    script.async = true;
    script.setAttribute('crossorigin', 'anonymous');
    document.body.appendChild(script);
	// Load ad when AdSense library is ready
	script.onload = () => {
	  //@ts-ignore
	  const adsbygoogle = window.adsbygoogle || [];
	  console.log({ adsbygoogle });
	  adsbygoogle.push({});
	}
  }, []);

  return (
	<div className="mt-1 mx-auto bg-transparent flex justify-center items-center"
	>
		<ins className="adsbygoogle"
		     style={{display:'block',width:'100%'}}
		     data-ad-client="ca-pub-3672455877501055"
		     data-ad-slot="9271809220"
			 data-ad-format="auto"
			 data-full-width-responsive="true"
			 ></ins>
		{/*data-ad-format="auto"*/}
	</div>
  );
};