import { SeacrhBar } from './SeacrhBar/SeacrhBar';
import { Component } from 'react';
import { fetchImages } from 'api';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { LoadMoreButton } from './LoadMoreButton/LoadMoreButton';
import toast, { Toaster } from 'react-hot-toast';
import { ScaleLoader } from 'react-spinners';
import { StyledContainer } from './Container.styled';

export class App extends Component {
  state = {
    query: '',
    images: [],
    page: 1,
    isMoreImages: false,
    isLoading: false,
    error: false,
  };

  onSubmit = evt => {
    evt.preventDefault();
    this.setState({
      query: `${Date.now()}/${evt.target.elements.query.value.trim()}`,
      images: [],
      page: 1,
    });
  };

  async componentDidUpdate(prevProps, prevState) {
    if (
      prevState.query !== this.state.query ||
      prevState.page !== this.state.page
    ) {
      try {
        this.setState({
          isLoading: true,
          error: false,
          isMoreImages: false,
        });

        const { images, totalHits } = await fetchImages(
          this.state.query.split('/')[1],
          this.state.page
        );

        if (!images.length) {
          this.setState({
            isMoreImages: false,
          });
          toast('There is no images for query like that.');
          return;
        }

        this.setState({
          images: [...this.state.images, ...images],
          isMoreImages:
            this.state.page === Math.ceil(totalHits / 12) ? false : true,
          isLoading: false,
        });
      } catch (error) {
        toast.error('Oops there is an error ocurred! Try to reload the page.');
        this.setState({
          error: true,
        });
      } finally {
        this.setState({
          isLoading: false,
        });
      }
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
      <StyledContainer className="py-3">
        <SeacrhBar onSubmit={this.onSubmit} />
        <ScaleLoader color="#36d7b7" loading={this.state.isLoading} />
        {!this.state.error && (
          <>
            <ImageGallery images={this.state.images} />
            {this.state.isMoreImages && (
              <LoadMoreButton onLoadMore={this.onLoadMore} />
            )}
          </>
        )}
        <Toaster position="top-right" />
      </StyledContainer>
    );
  }
}
