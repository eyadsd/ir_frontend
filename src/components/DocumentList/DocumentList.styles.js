import styled from 'styled-components';

export const Wrapper = styled.div`

`;

export const Content = styled.div`
h3{
    text-align: left;
    margin-left: 20px;

}
/* List */
ul {
  overflow-y:scroll;

  counter-reset: index;  
  padding: 0;
  max-width: 400px;
  max-height: 300px;

}

/* List element */
li {
  counter-increment: index; 
  display: flex;
  align-items: center;
  padding: 12px 0;
  box-sizing: border-box;
}


/* Element counter */
li::before {
  
  content: counters(index, ".", decimal-leading-zero);
  font-size: 1.5rem;
  text-align: right;
  font-weight: bold;
  min-width: 50px;
  padding-right: 12px;
  font-variant-numeric: tabular-nums;
  align-self: flex-start;
  background-image: linear-gradient(to bottom, aquamarine, orangered);
  background-attachment: fixed;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}


/* Element separation */
li + li {
  border-top: 1px solid rgba(255,255,255,0.2);
}

@use postcss-preset-env {
  stage: 0;
  autoprefixer: {
    grid: true;
  }
  browsers: last 2 versions
}

`;

