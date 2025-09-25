import React, { useState } from 'react';
import { Modal, Button, Card, Typography, Divider, message } from 'antd';
import { 
  Download, 
  Eye, 
  FileText, 
  ExternalLink,
  X
} from 'lucide-react';
import { imgUrl } from '@/helpers/constants';

const { Title, Text } = Typography;

interface PDFViewerProps {
  certificate: string;
}

const CirtifcateViewer: React.FC<PDFViewerProps> = ({ certificate}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  
  const pdfUrl = imgUrl + certificate;

  const handleIframeClick = () => {
    setIsModalVisible(true);
  };

  const handleDownload = async () => {
    try {
      // Create a temporary link to download the PDF
      const link = document.createElement('a');
      link.href = pdfUrl;
      link.download = certificate || 'certificate.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      message.success('Download started successfully!');
      setIsModalVisible(false);
    } catch (error) {
      message.error('Failed to download the file');
    }
  };

  const handleViewFullScreen = () => {
    window.open(pdfUrl, '_blank');
  };

  const handleModalClose = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <div className="flex flex-col items-center">
        <div 
          className="relative cursor-pointer group"
          onClick={handleIframeClick}
        >
          <iframe
            src={pdfUrl}
            width={300}
            height={200}
            className="rounded-lg scrollbar-hide overflow-hidden pointer-events-none"
            title={`Certificate: ${certificate}`}
          />
          
          {/* Overlay on hover */}
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 rounded-lg flex items-center justify-center">
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="bg-white rounded-full p-2 shadow-lg">
                <Eye className="w-5 h-5 text-gray-700" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Modal
        title={null}
        open={isModalVisible}
        onCancel={handleModalClose}
        footer={null}
        width={600}
        centered
        closeIcon={<X className="w-5 h-5" />}
      >
        <div className="p-4">
          {/* Header */}
          <div className="text-center mb-6">
            <div className="mb-4">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <FileText className="w-8 h-8 text-blue-600" />
              </div>
            </div>
            <Title level={3} className="mb-2">PDF Document</Title>
            <Text type="secondary" className="text-base">
              {certificate || 'Certificate Document'}
            </Text>
          </div>

          {/* PDF Preview */}
          <div className="mb-6">
            <Card className="overflow-hidden">
              <iframe
                src={pdfUrl}
                width="100%"
                height={300}
                className="rounded border-0"
                title="PDF Preview"
              />
            </Card>
          </div>

          <Divider />

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              type="primary"
              icon={<Download className="w-4 h-4" />}
              size="large"
              onClick={handleDownload}
              className="flex items-center justify-center min-w-[140px]"
            >
              Download PDF
            </Button>
            
            <Button
              icon={<ExternalLink className="w-4 h-4" />}
              size="large"
              onClick={handleViewFullScreen}
              className="flex items-center justify-center min-w-[140px]"
            >
              Open in New Tab
            </Button>
          </div>

          {/* Additional Info */}
          <div className="mt-6 p-3 bg-gray-50 rounded-lg">
            <Text type="secondary" className="text-sm">
              <strong>Note:</strong> Click "Download PDF" to save the document to your device, 
              or "Open in New Tab" to view it in full screen.
            </Text>
          </div>
        </div>
      </Modal>
    </>
  );
};

// Example usage component

export default CirtifcateViewer;