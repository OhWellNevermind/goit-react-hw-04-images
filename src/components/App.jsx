import { SeacrhBar } from './SeacrhBar/SeacrhBar';
import { Component } from 'react';
import { fetchImages } from 'api';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { LoadMoreButton } from './LoadMoreButton/LoadMoreButton';
import { Container } from '@mui/material';

export class App extends Component {
  state = {
    query: '',
    images: [],
    page: 1,
    isMoreImages: false,
    isLoading: false,
  };

  onSubmit = evt => {
    evt.preventDefault();
    this.setState({
      query: `${Date.now()}/${evt.target.elements.query.value}`,
      images: [],
      page: 1,
    });
  };

  async componentDidUpdate(prevProps, prevState) {
    if (
      prevState.query !== this.state.query ||
      prevState.page !== this.state.page
    ) {
      const images = await fetchImages(
        this.state.query.split('/')[1],
        this.state.page
      );

      if (!images.length) {
        this.setState({
          isMoreImages: false,
        });
        return;
      }

      this.setState({
        images: [...this.state.images, ...images],
        isMoreImages: true,
      });
    }
  }

  onLoadMore = () => {
    this.setState(prevState => {
      return {
        page: prevState.page + 1,
      };
    });
  };

  render() {
    return (
      <Container>
        <SeacrhBar onSubmit={this.onSubmit} />
        {this.state.isMoreImages && (
          <>
            <ImageGallery images={this.state.images} />
            <LoadMoreButton onLoadMore={this.onLoadMore} />
          </>
        )}
      </Container>
    );
  }
}
