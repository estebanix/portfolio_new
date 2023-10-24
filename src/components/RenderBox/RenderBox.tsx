interface dataProps {
    title: string;
  }
  
  interface RenderBoxProps {
    data?: dataProps[];
  }
  
  export const RenderBox: React.FC<RenderBoxProps> = ({ data }) => {
    return (
      <>
        {data && data.map(dat => <p key={dat.title}>{dat.title}</p>)}
      </>
    );
  }
  