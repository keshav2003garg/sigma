import React from 'react';
import { TextGenerateEffect } from '../ui/text-generate-effect';

interface InfoProps {}

export const Info: React.FC<InfoProps> = () => {
    return (
        <TextGenerateEffect
            className="bg-black"
            words={`Oxygen gets you high. In a catastrophic emergency, we're taking giant, panicked breaths. Suddenly you become euphoric, docile. You accept your fate. It's all right here. Emergency water landing, six hundred miles an hour. Blank faces, calm as Hindu cows`}
        />
    );
};
