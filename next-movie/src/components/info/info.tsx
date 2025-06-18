import { fadeInUp, MotionBox, staggerContainer } from '@/utils/motion';
import Cast from './cast';
import TextInfo from './text-info';
import Videos from './videos';

function Info({ id }: { id: string }) {
  return (
    <MotionBox
      sx={{
        height: '100%',
        display: { xs: 'block', lg: 'flex' },
        alignItems: 'end',
        gap: 2,
        padding: { xs: 1, md: 2, lg: 4 }
      }}
      variants={staggerContainer}
      initial="hidden"
      animate="show"
    >
      <MotionBox
        sx={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          gap: 1
        }}
        variants={fadeInUp}
      >
        <TextInfo id={id} />
      </MotionBox>

      <MotionBox
        sx={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          gap: { xs: 5, xl: 8 },
          mt: { xs: 1, xl: 0 }
        }}
        variants={fadeInUp}
      >
        <Videos id={id} />
        <Cast id={id} />
      </MotionBox>
    </MotionBox>
  );
}

export default Info;
