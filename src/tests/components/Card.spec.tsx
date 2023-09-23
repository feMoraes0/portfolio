import { screen, render } from '@testing-library/react';
import Card from '@/app/components/Card';
import '@testing-library/jest-dom';

describe('Given Card component rendered', () => {
  beforeEach(() => {
    render(
      <Card>
        <p>Hello world</p>
      </Card>
    );
  });

  describe('When article is validated', () => {
    let article: HTMLElement;

    beforeEach(() => {
      article = screen.getByRole('article');
    });

    it('Then should be in the document', () => {
      expect(article).toBeInTheDocument();
    });

    it('Then should have many classes applied as expected', () => {
      expect(article.className).toBe('rounded-2xl border h-screen flex flex-col items-center justify-center');
    });
  });

  it('Then should find a text inside the card component', () => {
    const text = screen.getByText('Hello world');
    expect(text).toBeInTheDocument();
  });
});
