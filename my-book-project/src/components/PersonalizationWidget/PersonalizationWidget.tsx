import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type PersonalizationSettings = {
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  preferredExamples: string[];
  showAdvancedDetails: boolean;
  preferredLanguage: string;
};

const defaultSettings: PersonalizationSettings = {
  difficulty: 'beginner',
  preferredExamples: [],
  showAdvancedDetails: false,
  preferredLanguage: 'en',
};

type PersonalizationWidgetProps = {
  chapterId: string;
  onSettingsChange?: (settings: PersonalizationSettings) => void;
};

const PersonalizationWidget: React.FC<PersonalizationWidgetProps> = ({
  chapterId,
  onSettingsChange
}) => {
  const [settings, setSettings] = useState<PersonalizationSettings>(defaultSettings);
  const [isExpanded, setIsExpanded] = useState(false);

  // Load saved settings from localStorage when component mounts
  useEffect(() => {
    const savedSettings = localStorage.getItem(`personalization_${chapterId}`);
    if (savedSettings) {
      try {
        setSettings(JSON.parse(savedSettings));
      } catch (e) {
        console.warn('Could not parse saved settings, using defaults');
      }
    }
  }, [chapterId]);

  // Notify parent of settings changes
  useEffect(() => {
    onSettingsChange?.(settings);
  }, [settings, onSettingsChange]);

  const handleDifficultyChange = (difficulty: PersonalizationSettings['difficulty']) => {
    setSettings(prev => ({
      ...prev,
      difficulty
    }));
  };

  const handleExampleToggle = (example: string) => {
    setSettings(prev => {
      const newExamples = prev.preferredExamples.includes(example)
        ? prev.preferredExamples.filter(e => e !== example)
        : [...prev.preferredExamples, example];

      return {
        ...prev,
        preferredExamples: newExamples
      };
    });
  };

  const handleShowAdvancedChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSettings(prev => ({
      ...prev,
      showAdvancedDetails: e.target.checked
    }));
  };

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSettings(prev => ({
      ...prev,
      preferredLanguage: e.target.value
    }));
  };

  const handleSave = () => {
    localStorage.setItem(`personalization_${chapterId}`, JSON.stringify(settings));
    alert('Personalization settings saved!');
  };

  const handleReset = () => {
    if (window.confirm('Are you sure you want to reset all personalization settings to default?')) {
      setSettings(defaultSettings);
      localStorage.removeItem(`personalization_${chapterId}`);
    }
  };

  const resetButtonClass = clsx(
    'button',
    'button--secondary',
    styles.resetButton
  );

  const saveButtonClass = clsx(
    'button',
    'button--primary',
    styles.saveButton
  );

  return (
    <div className={styles.personalizationWidget}>
      <div className={styles.header}>
        <h3>Personalize this Chapter</h3>
        <button
          className={styles.toggleButton}
          onClick={() => setIsExpanded(!isExpanded)}
          aria-label={isExpanded ? "Collapse personalization options" : "Expand personalization options"}
        >
          {isExpanded ? '▲' : '▼'}
        </button>
      </div>

      {isExpanded && (
        <div className={styles.content}>
          <div className={styles.settingGroup}>
            <label className={styles.label}>Difficulty Level:</label>
            <div className={styles.radioGroup}>
              {(['beginner', 'intermediate', 'advanced'] as const).map(level => (
                <label key={level} className={styles.radioLabel}>
                  <input
                    type="radio"
                    name="difficulty"
                    checked={settings.difficulty === level}
                    onChange={() => handleDifficultyChange(level)}
                  />
                  <span className={styles.radioText}>{level.charAt(0).toUpperCase() + level.slice(1)}</span>
                </label>
              ))}
            </div>
          </div>

          <div className={styles.settingGroup}>
            <label className={styles.label}>Preferred Examples:</label>
            <div className={styles.checkboxGroup}>
              {['Python', 'ROS 2', 'Gazebo', 'Unity', 'Isaac Sim', 'VLA'].map(example => (
                <label key={example} className={styles.checkboxLabel}>
                  <input
                    type="checkbox"
                    checked={settings.preferredExamples.includes(example)}
                    onChange={() => handleExampleToggle(example)}
                  />
                  <span className={styles.checkboxText}>{example}</span>
                </label>
              ))}
            </div>
          </div>

          <div className={styles.settingGroup}>
            <label className={styles.label}>
              <input
                type="checkbox"
                checked={settings.showAdvancedDetails}
                onChange={handleShowAdvancedChange}
              />
              <span className={styles.checkboxText}> Show advanced technical details</span>
            </label>
          </div>

          <div className={styles.settingGroup}>
            <label className={styles.label}>Preferred Language:</label>
            <select
              value={settings.preferredLanguage}
              onChange={handleLanguageChange}
              className={styles.select}
            >
              <option value="en">English</option>
              <option value="ur">Urdu</option>
              <option value="es">Spanish</option>
              <option value="fr">French</option>
            </select>
          </div>

          <div className={styles.buttonGroup}>
            <button className={resetButtonClass} onClick={handleReset}>
              Reset to Default
            </button>
            <button className={saveButtonClass} onClick={handleSave}>
              Save Settings
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PersonalizationWidget;