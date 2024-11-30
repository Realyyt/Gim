import React from 'react';
import Image from 'next/image';

interface SpecTableRow {
  label: string;
  values: string[];
}

interface SpecTableData {
  title: string;
  columns: string[];
  rows: SpecTableRow[];
}

export default function SpecTable({ table }: { table: SpecTableData }) {
  return (
    <div className="mb-16">
      {/* Only show images for Top Specs section */}
      {table.title === "Top Specs" ? (
        <>
          {/* Header with images and titles aligned */}
          <div className="grid grid-cols-1 md:grid-cols-[300px_1fr_1fr_1fr] gap-x-8 mb-16">
            {/* Top Specs title aligned with model names */}
            <div className="flex items-end border-b-2 border-[#1890d5] pb-2">
              <h2 className="text-xl font-semibold text-[#ee6c4d]">
                {table.title}
              </h2>
            </div>
            
            {table.columns.map((col, i) => {
              console.log('Column:', col, typeof col); // Debug log to see exact value and type
              const imagePath = 
                col === "KATANA SJ150" ? "/gims1.png" :
                col === "KATANA SJ450" ? "/sj451.png" :
                col === "KATANA SJ700" ? "/sj700.png" : null;
              console.log('Image path:', imagePath); // Debug log
              
              return (
                <div key={i} className="text-center border-b-2 border-[#1890d5] pb-2">
                  {imagePath && (  // Only render Image if we have a path
                    <Image 
                      src={imagePath}
                      alt={col}
                      width={100}
                      height={100}
                      className="mx-auto"
                    />
                  )}
                  <h3 className="text-xl font-semibold text-[#ee6c4d]">{col}</h3>
                </div>  
              );
            })}
          </div>
        </>
      ) : (
        // Section title for non-Top Specs tables
        <h2 className="text-2xl font-bold mb-8 text-[#ee6c4d] border-b-2 border-[#1890d5] pb-2">
          {table.title}
        </h2>
      )}

      {/* Specs Table */}
      <div className="border-t border-gray-200">
        {/* Column headers for non-Top Specs sections */}
        {table.title !== "Top Specs" && (
          <div className="grid grid-cols-1 md:grid-cols-[300px_1fr_1fr_1fr] gap-x-8">
            <div className="font-semibold text-gray-900 py-4">
              Specification
            </div>
            {table.columns.map((col, i) => (
              <div key={i} className="font-semibold text-gray-900 py-4">
                {col}
              </div>
            ))}
          </div>
        )}

        {/* Table rows */}
        {table.rows.map((row, rowIndex) => (
          <div 
            key={rowIndex} 
            className="grid grid-cols-1 md:grid-cols-[300px_1fr_1fr_1fr] gap-x-8 border-b border-gray-200"
          >
            <div className="font-medium text-gray-900 py-4 whitespace-nowrap">
              {row.label}
            </div>
            {row.values.map((value, colIndex) => (
              <div key={colIndex} className="text-gray-600 py-4 break-words">
                {value.split('\n').map((line, i) => (
                  <div key={i} className="mb-2">
                    {line.trim()}
                  </div>
                ))}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}