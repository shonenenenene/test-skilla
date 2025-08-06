import { useRef, useState } from 'react';
import SvgSelector from '@/components/shared/SvgSelector';
import { Call } from '@/types';
import { P1 } from '@/styles/textTags';
import { formatTime } from '@/utils/time';
import {
  ActionButton,
  ActionButtonsContainer,
  PlayButton,
  PlayerContainer,
  ProgressBar,
  TimeDisplay,
  Wrapper,
} from './styles';
import { fetchCallRecord } from '@/services/queries/fetchRecord';

interface RecordCellProps {
  record: Call['record'];
  partnershipId: Call['partnership_id'];
  time?: Call['time'];
  duration?: Call['duration'];
  isHovered: boolean;
}

const RecordCell = ({ record, partnershipId, time, duration, isHovered }: RecordCellProps) => {
  const displayTime = time || duration;

  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const hasRecord = !!record && !!partnershipId;

  const handlePlay = async () => {
    if (!audioRef.current) return;

    if (!audioRef.current.src) {
      const audioBlob = await fetchCallRecord(record!, partnershipId);
      audioRef.current.src = URL.createObjectURL(audioBlob);
    }

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleDownload = async () => {
    if (!audioRef.current) return;

    if (!audioRef.current.src) {
      const audioBlob = await fetchCallRecord(record!, partnershipId);
      audioRef.current.src = URL.createObjectURL(audioBlob);
    }

    const link = document.createElement('a');
    link.href = audioRef.current.src;
    link.download = 'record.mp3';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Wrapper>
      {!!displayTime && (
        <TimeDisplay $isHovered={isHovered} $hasRecord={hasRecord}>
          {formatTime(displayTime)}
        </TimeDisplay>
      )}

      <PlayerContainer $isHovered={isHovered} $hasRecord={hasRecord}>
        <audio ref={audioRef} onEnded={() => setIsPlaying(false)} />
        {!!time && <P1>{formatTime(time)}</P1>}

        <PlayButton onClick={handlePlay}>
          <SvgSelector svg={isPlaying ? 'pause' : 'play'} />
        </PlayButton>

        <ProgressBar />

        <ActionButtonsContainer>
          <ActionButton onClick={handleDownload}>
            <SvgSelector svg='download' />
          </ActionButton>

          <ActionButton>
            <SvgSelector svg='close' />
          </ActionButton>
        </ActionButtonsContainer>
      </PlayerContainer>
    </Wrapper>
  );
};

export default RecordCell;
