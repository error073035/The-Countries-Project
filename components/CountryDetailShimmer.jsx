import React from "react";
import { ShimmerButton, ShimmerText, ShimmerContentBlock, ShimmerCategoryItem } from "react-shimmer-effects";

export default function CountryDetailShimmer() {
  return (
    <div className="country-details-container" style={{ display: "flex", gap: "40px", alignItems: "flex-start" }}>
      {/* Flag shimmer */}
      <ShimmerContentBlock
        title
        text
        cta
        thumbnailWidth={320}
        thumbnailHeight={200}
        style={{ minWidth: 320, minHeight: 200 }}
      />

      {/* Details shimmer */}
      <div className="details-text-container" style={{ flex: 1 }}>
        <ShimmerText line={1} gap={10} />
        <ShimmerText line={3} gap={8} />
        <ShimmerCategoryItem hasImage={false} />
        <ShimmerButton size="md" />
        <div style={{ marginTop: 24 }}>
          <ShimmerText line={2} gap={8} />
        </div>
      </div>
    </div>
  );
}