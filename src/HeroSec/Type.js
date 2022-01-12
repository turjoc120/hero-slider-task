import React, { useEffect, useState } from 'react';
import Typewriter from "typewriter-effect";

const Type = ({ message, setPauseIt, runLoop, setRunLoop }) => {





    return (
        <div>
            <Typewriter
                onInit={(typewriter) => {
                    typewriter.typeString(`${message}`)
                        .deleteAll()
                        // typewriter.typeString(`${message}`)
                        //     .deleteAll()
                        // typewriter.typeString(`${message}`)
                        //     .deleteAll()

                        .callFunction(() => {
                            console.log('String typed out!');
                            // setPauseIt(true)
                            // setRunLoop(false)

                        })

                        .start();
                }}
                options={{
                    loop: runLoop,
                    autoStart: true,

                }}
            />
        </div>
    );
};

export default Type;